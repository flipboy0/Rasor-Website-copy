
import Head from "./components/top-container";
import Recent from "./components/recent-blogs1";
import Search from "./components/search-bar";
import Allblogs from "./components/all-blogs"

function BlogsTab() {
  return (
    <div>
      <Head /> 
      <Recent />  
      <Search />
      <Allblogs />

    </div>
  );
}

export default BlogsTab;
