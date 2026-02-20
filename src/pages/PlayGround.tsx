import Counter from "../components/counter/Counter";
import Accordion from "../components/accordion/Accordion";
export default function PlayGround() {
   return (
    <div>
      <h2>Counter</h2>
      <Counter min={0} max={5} step={1} />
      <h2> Accordion </h2>
      <Accordion items={[
        { heading: 'Heading 1', content: 'Content1' },
        { heading: 'Heading 2', content: 'Content2' },
        { heading: 'Heading 3', content: 'Content3' },
      ]} />
    </div>
    
   )
}