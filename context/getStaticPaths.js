import getData from './getData';

export function generateStaticParams() {
  const allPosts = getData();
  const postIds = allPosts.map((post) => post.id);

  const paths = postIds.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
