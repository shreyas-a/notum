import axios from 'axios'

import UserStore from '~~/stores/user'
import consts from '~~/constants'

const favorite = show =>
	axios.put(`${consts.SERVER_URL}/favorite`, {show, token: UserStore.token})

export default {
	favorite
}
