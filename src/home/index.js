import classes from './styles.module.scss'

function Home () {
  return (
    <main className={classes.main}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Computer Vision</h1>
        <section className={classes.content}>
          <article className={classes.article}>
            <form className={classes.form}>
              <input type='url' className={classes.input} />
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
          <div>
            <img src='https://via.placeholder.com/150' alt='Result' />
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
