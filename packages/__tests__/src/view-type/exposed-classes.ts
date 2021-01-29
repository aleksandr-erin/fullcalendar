import { DayGridView, DayTable } from '@fullcalendar-lw/daygrid'
import { ListView } from '@fullcalendar-lw/list'
import { DayTimeColsView, DayTimeCols } from '@fullcalendar-lw/timegrid'

describe('internal View/Grid classes', () => {
  it('are exposed', () => {
    expect(typeof DayTimeColsView).toBe('function')
    expect(typeof DayGridView).toBe('function')
    expect(typeof ListView).toBe('function')

    expect(typeof DayTable).toBe('function')
    expect(typeof DayTimeCols).toBe('function')
  })
})
