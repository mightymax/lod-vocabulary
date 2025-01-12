// This file is generated by the build script. Do not edit it manually.
import { prefixer as $prefixer } from '../utilities.js';
const prefixer = $prefixer('http://www.w3.org/2006/time#');

/**
 * [time](http://www.w3.org/2006/time#})
 */
const time = {
  /**
    * **[Date-Time description](http://www.w3.org/2006/time#DateTimeDescription)** (class)
    * 
    * Description of date and time structured with separate values for the various elements of a calendar-clock system. The temporal reference system is fixed to Gregorian Calendar, and the range of year, month, day properties restricted to corresponding XML Schema types xsd:gYear, xsd:gMonth and xsd:gDay, respectively.
    */
    DateTimeDescription: prefixer('DateTimeDescription'),

    /**
    * **[Generalized date-time description](http://www.w3.org/2006/time#GeneralDateTimeDescription)** (class)
    * 
    * Description of date and time structured with separate values for the various elements of a calendar-clock system
    */
    GeneralDateTimeDescription: prefixer('GeneralDateTimeDescription'),

    /**
    * **[Date-time interval](http://www.w3.org/2006/time#DateTimeInterval)** (class)
    * 
    * DateTimeInterval is a subclass of ProperInterval, defined using the multi-element DateTimeDescription.
    */
    DateTimeInterval: prefixer('DateTimeInterval'),

    /**
    * **[Proper interval](http://www.w3.org/2006/time#ProperInterval)** (class)
    * 
    * A temporal entity with non-zero extent or duration, i.e. for which the value of the beginning and end are different
    */
    ProperInterval: prefixer('ProperInterval'),

    /**
    * **[Day of week](http://www.w3.org/2006/time#DayOfWeek)** (class)
    * 
    * The day of week
    */
    DayOfWeek: prefixer('DayOfWeek'),

    /**
    * **[Time duration](http://www.w3.org/2006/time#Duration)** (class)
    * 
    * Duration of a temporal extent expressed as a number scaled by a temporal unit
    */
    Duration: prefixer('Duration'),

    /**
    * **[Temporal duration](http://www.w3.org/2006/time#TemporalDuration)** (class)
    * 
    * Time extent; duration of a time interval separate from its particular start position
    */
    TemporalDuration: prefixer('TemporalDuration'),

    /**
    * **[Duration description](http://www.w3.org/2006/time#DurationDescription)** (class)
    * 
    * Description of temporal extent structured with separate values for the various elements of a calendar-clock system. The temporal reference system is fixed to Gregorian Calendar, and the range of each of the numeric properties is restricted to xsd:decimal
    */
    DurationDescription: prefixer('DurationDescription'),

    /**
    * **[Generalized duration description](http://www.w3.org/2006/time#GeneralDurationDescription)** (class)
    * 
    * Description of temporal extent structured with separate values for the various elements of a calendar-clock system.
    */
    GeneralDurationDescription: prefixer('GeneralDurationDescription'),

    /**
    * **[Temporal position](http://www.w3.org/2006/time#TemporalPosition)** (class)
    * 
    * A position on a time-line
    */
    TemporalPosition: prefixer('TemporalPosition'),

    /**
    * **[Time instant](http://www.w3.org/2006/time#Instant)** (class)
    * 
    * A temporal entity with zero extent or duration
    */
    Instant: prefixer('Instant'),

    /**
    * **[Temporal entity](http://www.w3.org/2006/time#TemporalEntity)** (class)
    * 
    * A temporal interval or instant.
    */
    TemporalEntity: prefixer('TemporalEntity'),

    /**
    * **[Time interval](http://www.w3.org/2006/time#Interval)** (class)
    * 
    * A temporal entity with an extent or duration
    */
    Interval: prefixer('Interval'),

    /**
    * **[Month of year](http://www.w3.org/2006/time#MonthOfYear)** (class)
    * 
    * The month of the year
    */
    MonthOfYear: prefixer('MonthOfYear'),

    /**
    * **[Temporal Reference System](http://www.w3.org/2006/time#TRS)** (class)
    * 
    * A temporal reference system, such as a temporal coordinate system (with an origin, direction, and scale), a calendar-clock combination, or a (possibly hierarchical) ordinal system.
    * 
    * This is a stub class, representing the set of all temporal reference systems.
    */
    TRS: prefixer('TRS'),

    /**
    * **[Temporal unit](http://www.w3.org/2006/time#TemporalUnit)** (class)
    * 
    * A standard duration, which provides a scale factor for a time extent, or the granularity or precision for a time position.
    */
    TemporalUnit: prefixer('TemporalUnit'),

    /**
    * **[Time position](http://www.w3.org/2006/time#TimePosition)** (class)
    * 
    * A temporal position described using either a (nominal) value from an ordinal reference system, or a (numeric) value in a temporal coordinate system.
    */
    TimePosition: prefixer('TimePosition'),

    /**
    * **[Time Zone](http://www.w3.org/2006/time#TimeZone)** (class)
    * 
    * A Time Zone specifies the amount by which the local time is offset from UTC.
    * A time zone is usually denoted geographically (e.g. Australian Eastern Daylight Time), with a constant value in a given region.
    * The region where it applies and the offset from UTC are specified by a locally recognised governing authority.
    */
    TimeZone: prefixer('TimeZone'),

    /**
    * **[Year](http://www.w3.org/2006/time#Year)** (class)
    * 
    * Year duration
    */
    Year: prefixer('Year'),

    /**
    * **[after](http://www.w3.org/2006/time#after)** (property)
    * 
    * Gives directionality to time. If a temporal entity T1 is after another temporal entity T2, then the beginning of T1 is after the end of T2.
    */
    after: prefixer('after'),

    /**
    * **[before](http://www.w3.org/2006/time#before)** (property)
    * 
    * Gives directionality to time. If a temporal entity T1 is before another temporal entity T2, then the end of T1 is before the beginning of T2. Thus, "before" can be considered to be basic to instants and derived for intervals.
    */
    before: prefixer('before'),

    /**
    * **[day of week](http://www.w3.org/2006/time#dayOfWeek)** (property)
    * 
    * El día de la semana, cuyo valor es un miembro de la clase 'día de la semana'.
    */
    dayOfWeek: prefixer('dayOfWeek'),

    /**
    * **[has beginning](http://www.w3.org/2006/time#hasBeginning)** (property)
    * 
    * Beginning of a temporal entity
    */
    hasBeginning: prefixer('hasBeginning'),

    /**
    * **[has time](http://www.w3.org/2006/time#hasTime)** (property)
    * 
    * Supports the association of a temporal entity (instant or interval) to any thing
    */
    hasTime: prefixer('hasTime'),

    /**
    * **[has Date-Time description](http://www.w3.org/2006/time#hasDateTimeDescription)** (property)
    * 
    * Value of DateTimeInterval expressed as a structured value. The beginning and end of the interval coincide with the limits of the shortest element in the description.
    */
    hasDateTimeDescription: prefixer('hasDateTimeDescription'),

    /**
    * **[has duration](http://www.w3.org/2006/time#hasDuration)** (property)
    * 
    * Duration of a temporal entity, expressed as a scaled value or nominal value
    */
    hasDuration: prefixer('hasDuration'),

    /**
    * **[has temporal duration](http://www.w3.org/2006/time#hasTemporalDuration)** (property)
    * 
    * Duration of a temporal entity.
    */
    hasTemporalDuration: prefixer('hasTemporalDuration'),

    /**
    * **[has duration description](http://www.w3.org/2006/time#hasDurationDescription)** (property)
    * 
    * Duration of a temporal entity, expressed using a structured description
    */
    hasDurationDescription: prefixer('hasDurationDescription'),

    /**
    * **[has end](http://www.w3.org/2006/time#hasEnd)** (property)
    * 
    * End of a temporal entity.
    */
    hasEnd: prefixer('hasEnd'),

    /**
    * **[Temporal reference system used](http://www.w3.org/2006/time#hasTRS)** (property)
    * 
    * The temporal reference system used by a temporal position or extent description.
    */
    hasTRS: prefixer('hasTRS'),

    /**
    * **[in date-time description](http://www.w3.org/2006/time#inDateTime)** (property)
    * 
    * Position of an instant, expressed using a structured description
    */
    inDateTime: prefixer('inDateTime'),

    /**
    * **[Temporal position](http://www.w3.org/2006/time#inTemporalPosition)** (property)
    * 
    * Position of a time instant
    */
    inTemporalPosition: prefixer('inTemporalPosition'),

    /**
    * **[Time position](http://www.w3.org/2006/time#inTimePosition)** (property)
    * 
    * Position of an instant, expressed as a temporal coordinate or nominal value
    */
    inTimePosition: prefixer('inTimePosition'),

    /**
    * **[has time instant inside](http://www.w3.org/2006/time#inside)** (property)
    * 
    * An instant that falls inside the interval. It is not intended to include beginnings and ends of intervals.
    */
    inside: prefixer('inside'),

    /**
    * **[interval after](http://www.w3.org/2006/time#intervalAfter)** (property)
    * 
    * If a proper interval T1 is intervalAfter another proper interval T2, then the beginning of T1 is after the end of T2.
    */
    intervalAfter: prefixer('intervalAfter'),

    /**
    * **[interval disjoint](http://www.w3.org/2006/time#intervalDisjoint)** (property)
    * 
    * If a proper interval T1 is intervalDisjoint another proper interval T2, then the beginning of T1 is after the end of T2, or the end of T1 is before the beginning of T2, i.e. the intervals do not overlap in any way, but their ordering relationship is not known.
    */
    intervalDisjoint: prefixer('intervalDisjoint'),

    /**
    * **[interval before](http://www.w3.org/2006/time#intervalBefore)** (property)
    * 
    * If a proper interval T1 is intervalBefore another proper interval T2, then the end of T1 is before the beginning of T2.
    */
    intervalBefore: prefixer('intervalBefore'),

    /**
    * **[interval contains](http://www.w3.org/2006/time#intervalContains)** (property)
    * 
    * If a proper interval T1 is intervalContains another proper interval T2, then the beginning of T1 is before the beginning of T2, and the end of T1 is after the end of T2.
    */
    intervalContains: prefixer('intervalContains'),

    /**
    * **[interval during](http://www.w3.org/2006/time#intervalDuring)** (property)
    * 
    * If a proper interval T1 is intervalDuring another proper interval T2, then the beginning of T1 is after the beginning of T2, and the end of T1 is before the end of T2.
    */
    intervalDuring: prefixer('intervalDuring'),

    /**
    * **[interval in](http://www.w3.org/2006/time#intervalIn)** (property)
    * 
    * If a proper interval T1 is intervalIn another proper interval T2, then the beginning of T1 is after the beginning of T2 or is coincident with the beginning of T2, and the end of T1 is before the end of T2, or is coincident with the end of T2, except that end of T1 may not be coincident with the end of T2 if the beginning of T1 is coincident with the beginning of T2.
    */
    intervalIn: prefixer('intervalIn'),

    /**
    * **[interval equals](http://www.w3.org/2006/time#intervalEquals)** (property)
    * 
    * If a proper interval T1 is intervalEquals another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is coincident with the end of T2.
    */
    intervalEquals: prefixer('intervalEquals'),

    /**
    * **[interval finished by](http://www.w3.org/2006/time#intervalFinishedBy)** (property)
    * 
    * If a proper interval T1 is intervalFinishedBy another proper interval T2, then the beginning of T1 is before the beginning of T2, and the end of T1 is coincident with the end of T2.
    */
    intervalFinishedBy: prefixer('intervalFinishedBy'),

    /**
    * **[interval finishes](http://www.w3.org/2006/time#intervalFinishes)** (property)
    * 
    * If a proper interval T1 is intervalFinishes another proper interval T2, then the beginning of T1 is after the beginning of T2, and the end of T1 is coincident with the end of T2.
    */
    intervalFinishes: prefixer('intervalFinishes'),

    /**
    * **[interval meets](http://www.w3.org/2006/time#intervalMeets)** (property)
    * 
    * If a proper interval T1 is intervalMeets another proper interval T2, then the end of T1 is coincident with the beginning of T2.
    */
    intervalMeets: prefixer('intervalMeets'),

    /**
    * **[interval met by](http://www.w3.org/2006/time#intervalMetBy)** (property)
    * 
    * If a proper interval T1 is intervalMetBy another proper interval T2, then the beginning of T1 is coincident with the end of T2.
    */
    intervalMetBy: prefixer('intervalMetBy'),

    /**
    * **[interval overlapped by](http://www.w3.org/2006/time#intervalOverlappedBy)** (property)
    * 
    * If a proper interval T1 is intervalOverlappedBy another proper interval T2, then the beginning of T1 is after the beginning of T2, the beginning of T1 is before the end of T2, and the end of T1 is after the end of T2.
    */
    intervalOverlappedBy: prefixer('intervalOverlappedBy'),

    /**
    * **[interval overlaps](http://www.w3.org/2006/time#intervalOverlaps)** (property)
    * 
    * If a proper interval T1 is intervalOverlaps another proper interval T2, then the beginning of T1 is before the beginning of T2, the end of T1 is after the beginning of T2, and the end of T1 is before the end of T2.
    */
    intervalOverlaps: prefixer('intervalOverlaps'),

    /**
    * **[interval started by](http://www.w3.org/2006/time#intervalStartedBy)** (property)
    * 
    * If a proper interval T1 is intervalStarted another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is after the end of T2.
    */
    intervalStartedBy: prefixer('intervalStartedBy'),

    /**
    * **[interval starts](http://www.w3.org/2006/time#intervalStarts)** (property)
    * 
    * If a proper interval T1 is intervalStarts another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is before the end of T2.
    */
    intervalStarts: prefixer('intervalStarts'),

    /**
    * **[month of year](http://www.w3.org/2006/time#monthOfYear)** (property)
    * 
    * The month of the year, whose value is a member of the class time:MonthOfYear
    */
    monthOfYear: prefixer('monthOfYear'),

    /**
    * **[in time zone](http://www.w3.org/2006/time#timeZone)** (property)
    * 
    * The time zone for clock elements in the temporal position
    */
    timeZone: prefixer('timeZone'),

    /**
    * **[temporal unit type](http://www.w3.org/2006/time#unitType)** (property)
    * 
    * The temporal unit which provides the precision of a date-time value or scale of a temporal extent
    */
    unitType: prefixer('unitType'),

    /**
    * **[day](http://www.w3.org/2006/time#day)** (property)
    * 
    * Day position in a calendar-clock system.
    * 
    * The range of this property is not specified, so can be replaced by any specific representation of a calendar day from any calendar.
    */
    day: prefixer('day'),

    /**
    * **[day of year](http://www.w3.org/2006/time#dayOfYear)** (property)
    * 
    * The number of the day within the year
    */
    dayOfYear: prefixer('dayOfYear'),

    /**
    * **[days duration](http://www.w3.org/2006/time#days)** (property)
    * 
    * length of, or element of the length of, a temporal extent expressed in days
    */
    days: prefixer('days'),

    /**
    * **[has XSD duration](http://www.w3.org/2006/time#hasXSDDuration)** (property)
    * 
    * Extent of a temporal entity, expressed using xsd:duration
    */
    hasXSDDuration: prefixer('hasXSDDuration'),

    /**
    * **[hour](http://www.w3.org/2006/time#hour)** (property)
    * 
    * Hour position in a calendar-clock system.
    */
    hour: prefixer('hour'),

    /**
    * **[hours duration](http://www.w3.org/2006/time#hours)** (property)
    * 
    * length of, or element of the length of, a temporal extent expressed in hours
    */
    hours: prefixer('hours'),

    /**
    * **[in XSD date](http://www.w3.org/2006/time#inXSDDate)** (property)
    * 
    * Position of an instant, expressed using xsd:date
    */
    inXSDDate: prefixer('inXSDDate'),

    /**
    * **[in XSD Date-Time](http://www.w3.org/2006/time#inXSDDateTime)** (property)
    * 
    * Position of an instant, expressed using xsd:dateTime
    */
    inXSDDateTime: prefixer('inXSDDateTime'),

    /**
    * **[in XSD Date-Time-Stamp](http://www.w3.org/2006/time#inXSDDateTimeStamp)** (property)
    * 
    * Position of an instant, expressed using xsd:dateTimeStamp
    */
    inXSDDateTimeStamp: prefixer('inXSDDateTimeStamp'),

    /**
    * **[in XSD g-Year](http://www.w3.org/2006/time#inXSDgYear)** (property)
    * 
    * Position of an instant, expressed using xsd:gYear
    */
    inXSDgYear: prefixer('inXSDgYear'),

    /**
    * **[in XSD g-YearMonth](http://www.w3.org/2006/time#inXSDgYearMonth)** (property)
    * 
    * Position of an instant, expressed using xsd:gYearMonth
    */
    inXSDgYearMonth: prefixer('inXSDgYearMonth'),

    /**
    * **[minute](http://www.w3.org/2006/time#minute)** (property)
    * 
    * Minute position in a calendar-clock system.
    */
    minute: prefixer('minute'),

    /**
    * **[minutes](http://www.w3.org/2006/time#minutes)** (property)
    * 
    * length, or element of, a temporal extent expressed in minutes
    */
    minutes: prefixer('minutes'),

    /**
    * **[month](http://www.w3.org/2006/time#month)** (property)
    * 
    * Month position in a calendar-clock system.
    * 
    * The range of this property is not specified, so can be replaced by any specific representation of a calendar month from any calendar.
    */
    month: prefixer('month'),

    /**
    * **[months duration](http://www.w3.org/2006/time#months)** (property)
    * 
    * length of, or element of the length of, a temporal extent expressed in months
    */
    months: prefixer('months'),

    /**
    * **[Name of temporal position](http://www.w3.org/2006/time#nominalPosition)** (property)
    * 
    * The (nominal) value indicating temporal position in an ordinal reference system
    */
    nominalPosition: prefixer('nominalPosition'),

    /**
    * **[Numeric value of temporal duration](http://www.w3.org/2006/time#numericDuration)** (property)
    * 
    * Value of a temporal extent expressed as a decimal number scaled by a temporal unit
    */
    numericDuration: prefixer('numericDuration'),

    /**
    * **[Numeric value of temporal position](http://www.w3.org/2006/time#numericPosition)** (property)
    * 
    * The (numeric) value indicating position within a temporal coordinate system
    */
    numericPosition: prefixer('numericPosition'),

    /**
    * **[second](http://www.w3.org/2006/time#second)** (property)
    * 
    * Second position in a calendar-clock system.
    */
    second: prefixer('second'),

    /**
    * **[seconds duration](http://www.w3.org/2006/time#seconds)** (property)
    * 
    * length of, or element of the length of, a temporal extent expressed in seconds
    */
    seconds: prefixer('seconds'),

    /**
    * **[weeks duration](http://www.w3.org/2006/time#weeks)** (property)
    * 
    * length of, or element of the length of, a temporal extent expressed in weeks
    */
    weeks: prefixer('weeks'),

    /**
    * **[years duration](http://www.w3.org/2006/time#years)** (property)
    * 
    * length of, or element of the length of, a temporal extent expressed in years
    */
    years: prefixer('years'),

    /**
    * **[week](http://www.w3.org/2006/time#week)** (property)
    * 
    * Week number within the year.
    */
    week: prefixer('week'),

    /**
    * **[has XSD date-time](http://www.w3.org/2006/time#xsdDateTime)** (property)
    * 
    * Value of DateTimeInterval expressed as a compact value.
    */
    xsdDateTime: prefixer('xsdDateTime'),

    /**
    * **[year](http://www.w3.org/2006/time#year)** (property)
    * 
    * Year position in a calendar-clock system.
    * 
    * The range of this property is not specified, so can be replaced by any specific representation of a calendar year from any calendar.
    */
    year: prefixer('year'),

  
  };

export default time

