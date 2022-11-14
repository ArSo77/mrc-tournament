import { ref, Ref } from 'vue';
import { genId } from '@/helpers/generator';




export interface User {
  id: string
}

export default function useUser() {
  const users: Ref<User[]> = ref([])

  const generateUsers = (numberOfUser: number) => {
    users.value = []
    for(let i = 0; i < numberOfUser; i++){
      users.value.push({id: genId('User')})
    }
  }

    return { users, generateUsers }
}








