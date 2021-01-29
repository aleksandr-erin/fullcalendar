import momentTimeZonePlugin from '@fullcalendar-lw/moment-timezone'
import { testTimeZoneImpl } from '../lib/timeZoneImpl'

describe('moment-timezone', () => {
  testTimeZoneImpl(momentTimeZonePlugin)
})
