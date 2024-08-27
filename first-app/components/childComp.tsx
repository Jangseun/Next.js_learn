import { BaseBallType } from "@/app/detail/page";

export default function ChildComp({datas}: {datas: BaseBallType[]}) { //자식컴포 데이타스 메개변수 
    console.log(datas);
    return (
    <>
    {datas.map((value, i) => {
            return (
                <div key={i} className="childCompBodys">
                <span>{value.name}</span>
                <span>{value.win}</span>
                <span>{value.locate}</span>
                <br />
                </div>
            )
        })}
    </>
    );
// 프롭스 넘겨주는거
}