import { EVENT_SOURCE_REFINERS } from './event-source-refiners'

type ExtraEventSourceRefiners = typeof EVENT_SOURCE_REFINERS
declare module '@fullcalendar-lw/common' {
  interface EventSourceRefiners extends ExtraEventSourceRefiners {}
}
