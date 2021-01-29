import { OPTION_REFINERS } from './options-refiners'

type ExtraOptionRefiners = typeof OPTION_REFINERS
declare module '@fullcalendar-lw/common' {
  interface BaseOptionRefiners extends ExtraOptionRefiners {}
}
