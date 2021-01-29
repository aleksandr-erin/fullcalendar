import interactionPlugin from '@fullcalendar-lw/interaction'
import dayGridPlugin from '@fullcalendar-lw/daygrid'
import timeGridPlugin from '@fullcalendar-lw/timegrid'
import listPlugin from '@fullcalendar-lw/list'

export const DEFAULT_PLUGINS = [
  interactionPlugin,
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
]

pushOptions({
  plugins: DEFAULT_PLUGINS,
})
