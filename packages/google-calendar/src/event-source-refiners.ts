import { identity, Identity, Dictionary } from '@fullcalendar-lw/common'

export const EVENT_SOURCE_REFINERS = {
  googleCalendarApiKey: String, // TODO: rename with no prefix?
  googleCalendarId: String,
  googleCalendarApiBase: String,
  extraParams: identity as Identity<Dictionary | (() => Dictionary)>,
}
