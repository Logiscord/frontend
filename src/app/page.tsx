import Image from 'next/image'
import {Button} from "@mui/material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant="outlined" color="primary">
        Hello World
      </Button>
    </main>
  )
}
