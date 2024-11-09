import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
    OpenMind is an open-source AI platform that sparks creativity, inviting you to explore, craft, and share unique prompts that inspire fresh ideas.
    </p>

    <Feed />
  </section>
);

export default Home;
