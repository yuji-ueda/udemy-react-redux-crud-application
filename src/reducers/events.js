import _ from "lodash"
import { 
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from  "../actions"

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data  = action.response.data
      // console.log(events)
      // console.log(action.response.data)
      // {id: 8, title: "Let's have an event 8!", body: "This is the body for event 8."}
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id")
    case DELETE_EVENT:
      delete events[action.id]
      return { ...events }
    default:
      return events
  } 
}