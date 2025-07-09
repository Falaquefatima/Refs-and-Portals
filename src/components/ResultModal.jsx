import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal( {  onReset,targetTime,remainingTime },ref) {
  const dialog = useRef();


const userLost=remainingTime<=0
const formattedRemainingTime=(remainingTime/1000).toFixed(2)
const score=Math.round((1-remainingTime/(targetTime*1000))*100)

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You lost</h2> }
     {!userLost && <h2>your score:{score}</h2>}
      <p>
        The Target time was <strong>{targetTime}second</strong>
      </p>
      <p>
        you stopped the timer with <strong>{formattedRemainingTime}second left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});
export default ResultModal;

// export default function ResultModal({ ref,result, targetTime }) {
//   return (
//     <dialog ref={ref} className="result-modal" >
//       <h2>Your {result}</h2>
//       <p>
//         The Target time was <strong>{targetTime}second</strong>
//       </p>
//       <p>
//         you stopped the timer with <strong>X second left .</strong>
//       </p>
//       <form method="dialog">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// }
