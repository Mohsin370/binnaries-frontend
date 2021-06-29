import React, { useState, useEffect } from "react";
import styles from "./search.module.css";

export default function Search(props) {
  const [staticData, setStaticData] = useState([]);
  if (staticData.length < 1 && props.searchData.length > 1) {
    setStaticData(props.searchData);
    console.log(staticData);
  }

  const searchItem = (e) => {
    let searchItems = staticData.filter((item) => {
      return item
        ? Object.values(item).some((val) =>
            val
              ? val
                  .toString()
                  .toLowerCase()
                  .includes(e.target.value.toString().toLowerCase())
              : ""
          )
        : staticData;
    });
    props.updateState(searchItems);
  };

  return (
    <div className={styles.searchInput} onChange={searchItem}>
      <input placeholder={props.searchPlaceholder} />
    </div>
  );
}
