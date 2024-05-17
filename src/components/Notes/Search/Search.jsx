import { MdSearch } from "react-icons/md";     
import styles from "./Search.module.css"                                         
const Search = ({ onSearch }) => {
  return (
    <div className={styles.search}>
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={(event) => onSearch(event.target.value)}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};
export default Search;