import { Typography } from '@material-tailwind/react'
import Button from '@smarket/design/button/index'
import Input from '@smarket/design/input/index'
import {AiOutlineExclamationCircle} from 'react-icons/ai'


export default function Index () {
  return<div className='flex  items-center justify-center  w-screen h-screen flex-col gap-5'>
      <Button>Envoyer</Button>
      <div className="w-[32rem]">
      <Input type="password" label="Password" />
      <Typography variant="small" color="gray" className="flex items-center gap-1 font-normal mt-2">
        <AiOutlineExclamationCircle/>
        Use at least 8 characters, one uppercase, one lowercase and one number.
      </Typography>
    </div>
  </div> 
}