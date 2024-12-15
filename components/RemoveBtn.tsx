'use client';

import { Trash } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }: any) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm('Are you sure?');

   


    if (confirmed) {
      try {
        const response = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: 'DELETE',
        });

        // Check if the response was successful
        if (response.ok) {
         
          router.refresh();
        } else {
          console.error('Failed to delete the topic');
        }
      } catch (error) {
        console.error('Error occurred during deletion:', error);
      }
    }
  };

  return (
    <button onClick={removeTopic}>
      <Trash size={24} color="#FF0000" />
    </button>
  );
};

export default RemoveBtn;
