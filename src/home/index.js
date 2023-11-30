import { isEmpty } from 'lodash'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

import analyzeImage from '../functions/analyzeImage'

import classes from './styles.module.scss'
import { URL_REGEX } from '../constants/regex'

function Home () {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [imageData, setImageData] = useState(null)
  const handleAnalyzeImage = useCallback(async (formData) => {
    const imageUrl = formData.imageUrl

    const data = await analyzeImage(imageUrl)

    setImageData(JSON.stringify(data))
  }, [])

  return (
    <main className={classes.main}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Computer Vision</h1>
        <section className={classes.content}>
          <article className={classes.article}>
            <form onSubmit={handleSubmit(handleAnalyzeImage)} className={classes.form}>
              <input
                defaultValue=''
                className={classes.input}
                {...register('imageUrl', { required: 'A URL is required', pattern: URL_REGEX, message: 'Please enter a valid URL' })}
              />
              {errors.imageUrl && <span>{errors.imageUrl.message}</span>}
              <button type='submit'>Analyze</button>
            </form>
          </article>
          <article className={classes.article}>
            <form className={classes.form}>
              <textarea className={classes.textarea} />
              <button type='submit'>Generate</button>
            </form>
          </article>
        </section>
        <section className={classes.result}>
          <h3>Result</h3>
          {!isEmpty(imageData) && (
            <div>
              {imageData}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

export default Home
