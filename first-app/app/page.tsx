import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "@/components/navgar";

export default function Home() {
  const numList:number[] = [2,3,4,5,6,7,8,9];
  const nList:number[] = [1,2,3,4,5,6,7,8,9];

  //중요
  [1,2,3,4].map((value, i) => {
    value * value
  });

  return (
    <>
    <div className={styles.container}>
      {numList.map((value, i) => {
        return(
          <div key={i}>
            <h1>{value}단</h1>
            {nList.map((n, j) => {
              return(
                <h2 key={i}>
                  {value} * {n} = {value*n}
                </h2>
              ) 
            })}
            <br />
          </div>
        );
      })}
      </div> 
      </>  // div는 하나만 써야함. 그래서 묶어주는 애가 필요함 빈칸이 이런 역할
  );
}
