import Counter from "../components/counter/Counter"
export default function PlayGround() {
   return (
    <div>
      <h2>Counter</h2>
      <Counter min={0} max={5} step={1} />
    </div>
   )
}