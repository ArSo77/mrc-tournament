import { ref, Ref } from 'vue';
import { User } from '@/composable/useUser';
import { genId } from '@/helpers/generator';

export interface Race {
  id: string
  usersId?: any[]
}



export default function useRace() {
  const races: Ref<Race[]> = ref([])

  const generateRaces = (users: User[]) => {
    console.log('..', users)
    races.value = []
    for(let i = 0; i < users.length/4; i++){
      races.value.push({id: genId('Race'), usersId: [
          users[i*4+0].id,
          users[i*4+1].id,
          users[i*4+2].id,
          users[i*4+3].id,
        ]})
    }
  }


  return { races, generateRaces }
}
