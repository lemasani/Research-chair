import { ring2 } from 'ldrs'

ring2.register()

export default function Loader() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <l-ring-2
        size="97"
        stroke="5"
        stroke-length="0.25"
        bg-opacity="0.1"
        speed="0.8" 
        color="#1D67AF" 
      ></l-ring-2>
    </div>
  );
}