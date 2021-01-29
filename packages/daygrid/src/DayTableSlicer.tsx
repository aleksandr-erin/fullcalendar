import { DayTableModel, DateRange, Slicer } from '@fullcalendar-lw/common'
import { TableSeg } from './TableSeg'

export class DayTableSlicer extends Slicer<TableSeg, [DayTableModel]> {
  forceDayIfListItem = true

  sliceRange(dateRange: DateRange, dayTableModel: DayTableModel): TableSeg[] {
    return dayTableModel.sliceRange(dateRange)
  }
}
