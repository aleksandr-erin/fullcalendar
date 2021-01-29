import { globalPlugins } from '@fullcalendar-lw/core'
import interactionPlugin from '@fullcalendar-lw/interaction'
import dayGridPlugin from '@fullcalendar-lw/daygrid'
import timeGridPlugin from '@fullcalendar-lw/timegrid'
import listPlugin from '@fullcalendar-lw/list'
import bootstrapPlugin from '@fullcalendar-lw/bootstrap'
import googleCalendarPlugin from '@fullcalendar-lw/google-calendar'

globalPlugins.push(
  interactionPlugin,
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  bootstrapPlugin,
  googleCalendarPlugin,
)

export * from '@fullcalendar-lw/core'
export * from '@fullcalendar-lw/interaction'
export * from '@fullcalendar-lw/daygrid'
export * from '@fullcalendar-lw/timegrid'
export * from '@fullcalendar-lw/list'
export * from '@fullcalendar-lw/bootstrap'
export * from '@fullcalendar-lw/google-calendar'
