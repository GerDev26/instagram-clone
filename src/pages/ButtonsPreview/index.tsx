import { Button } from "../../components/Button";

export function ButtonsPreview () {
  return (
    <>
    <div style={{padding: '20px', display: 'flex', gap: '8px'}}>
    <Button variant="outlined" >Button</Button>
    <Button disabled variant="outlined" color="neutral" startIcon={<Icon />}>Button</Button>
    <Button variant="outlined" color="success" endIcon={<Icon />}>Button</Button>
    <Button variant="outlined" color="warning" endIcon={<Icon />}>Button</Button>
    <Button variant="outlined" color="danger" >Button</Button>
    </div>
    <div style={{padding: '20px', display: 'flex', gap: '8px'}}>
    <Button variant="normal" >Button</Button>
    <Button variant="normal" color="neutral" endIcon={<Icon2 />} >Button</Button>
    <Button variant="normal" color="success" >Button</Button>
    <Button variant="normal" color="warning" >Button</Button>
    <Button variant="normal" color="danger" >Button</Button>
    </div>
    <div style={{padding: '20px', display: 'flex', gap: '8px'}}>
    <Button variant="text" >Button</Button>
    <Button variant="text" color="neutral" >Button</Button>
    <Button variant="text" color="success" >Button</Button>
    <Button variant="text" color="warning" >Button</Button>
    <Button variant="text" color="danger" >Button</Button>
    </div>
    </>
  )
}
function Icon(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

  )
}

function Icon2(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM13.5 10.5h-6" />
</svg>

  )
}