// TVL line graph
export enum TVLLineGraphDataFields {
	DATE = "date",
	TVL = "Total Valued Locked",
}

export interface TVLLineGraphDataRow {
	[TVLLineGraphDataFields.DATE]: Date
	[TVLLineGraphDataFields.TVL]: number
}

export type TVLLineGraphData = TVLLineGraphDataRow[]

// Total Revenue pie chart
export enum TRPieChartDataFields {
	TYPE = "type",
	REVENUE = "Revenue",
}

export enum TRPieChartTypes {
	PROTOCOL = "Protocol",
	SUPPLY_SIDE = "Supply",
}

export interface TRPieChartDataRow {
	[TRPieChartDataFields.TYPE]: TRPieChartTypes
	[TRPieChartDataFields.REVENUE]: number
}

export type TRPieChartData = TRPieChartDataRow[]

// Total Revenue bar graph
export enum TRBarGraphDataFields {
	DATE = "date",
	REVENUE = "Revenue",
}

export interface TRBarGraphDataRow {
	[TRBarGraphDataFields.DATE]: Date
	[TRBarGraphDataFields.REVENUE]: number
}

export type TRBarGraphData = TRBarGraphDataRow[]

// Total Revenue (Protocol + Supply Side) bar graph
export enum TRSPBarGraphDataTypes {
	TSR = "Supply Side",
	TPR = "Protocol Side",
}

export enum TRSPBarGraphDataFields {
	DATE = "date",
	TYPE = "type",
	REVENUE = "Revenue",
}

export interface TRSPBarGraphDataRow {
	[TRSPBarGraphDataFields.DATE]: Date
	[TRSPBarGraphDataFields.TYPE]: TRSPBarGraphDataTypes
	[TRSPBarGraphDataFields.REVENUE]: number
}

export type TRSPBarGraphData = TRSPBarGraphDataRow[]

// Total Protocol Side Revenue bar graph
export enum TPRBarGraphDataFields {
	DATE = "date",
	REVENUE = "Revenue",
}

export interface TPRBarGraphDataRow {
	[TPRBarGraphDataFields.DATE]: Date
	[TPRBarGraphDataFields.REVENUE]: number
}

export type TPRBarGraphData = TPRBarGraphDataRow[]

// Total Supply Side Revenue line graph
export enum TSRBarGraphDataFields {
	DATE = "date",
	REVENUE = "Revenue",
}

export interface TSRBarGraphDataRow {
	[TSRBarGraphDataFields.DATE]: Date
	[TSRBarGraphDataFields.REVENUE]: number
}

export type TSRBarGraphData = TSRBarGraphDataRow[]

// Daily Usage (Active Users + Transaction Count) bar graph
export enum DUBarGraphDataFields {
	DATE = "date",
}

export interface DUBarGraphDataRow {
	[DUBarGraphDataFields.DATE]: Date
}

export type DUBarGraphData = DUBarGraphDataRow[]

// Daily Active Users line graph
export enum DAULineGraphDataFields {
	DATE = "date",
	ACTIVE_USERS = "Active Users",
}

export interface DAULineGraphDataRow {
	[DAULineGraphDataFields.DATE]: Date
	[DAULineGraphDataFields.ACTIVE_USERS]: number
}

export type DAULineGraphData = DAULineGraphDataRow[]

// Daily Transaction Count bar graph
export enum DTCBarGraphDataFields {
	DATE = "date",
	TRANSACTION_COUNT = "Transaction Count",
}

export interface DTCBarGraphDataRow {
	[DTCBarGraphDataFields.DATE]: Date
	[DTCBarGraphDataFields.TRANSACTION_COUNT]: number
}

export type DTCBarGraphData = DTCBarGraphDataRow[]
