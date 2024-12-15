'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

const EditTopicForm = ({id, title, description}:any) => {

const [newTitle, setNewTitle] = useState(title);
const [newDescription , setNewDescription] = useState(description);

const router = useRouter();

const handleSubmit = async (e:any) => {

  e.preventDefault();


  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      method: "PUT",
      headers:{
        "content-type": "application/json",
      },
      body: JSON.stringify({newTitle, newDescription}),
    })

    if (!res.ok){
      throw new Error('failed to update topic')
    }
    router.refresh();
    router.push('/')
  } catch (error) {
    console.log(error);
    
  }

}
  return (
    <form  onSubmit={handleSubmit} className=' flex flex-col gap-2'>
    <Input
    onChange={(e) => setNewTitle(e.target.value)}
    value={newTitle}
        className='font-medium'
        type="text"
        placeholder='Topic title'
     />

    <Textarea
     onChange={(e) => setNewDescription(e.target.value)}
     value={newDescription}
        className='font-medium'
      
        placeholder='Topic Description'
     />

        <Button
                variant={'default'}
                type='submit'
                className=' bg bg-green-600 font-bold text-white py-3 px-6 w-fit'>
                Update Topic
            </Button>
</form>
  )
}

export default EditTopicForm
