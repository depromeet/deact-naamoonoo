import { IAttribute, generateElement } from "./generateElement";
import { Component } from "./";

const htmlTagNames = [
	"a",
	"abbr",
	"acronym",
	"address",
	"applet",
	"area",
	"article",
	"aside",
	"audio",
	"b",
	"base",
	"basefont",
	"bdi",
	"bdo",
	"big",
	"blockquote",
	"body",
	"br",
	"button",
	"canvas",
	"caption",
	"center",
	"cite",
	"code",
	"col",
	"colgroup",
	"data",
	"datalist",
	"dd",
	"del",
	"details",
	"dfn",
	"dialog",
	"dir",
	"div",
	"dl",
	"dt",
	"em",
	"embed",
	"fieldset",
	"figcaption",
	"figure",
	"font",
	"footer",
	"form",
	"frame",
	"frameset",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hr",
	"html",
	"i",
	"iframe",
	"img",
	"input",
	"ins",
	"kbd",
	"label",
	"legend",
	"li",
	"link",
	"main",
	"map",
	"mark",
	"meta",
	"meter",
	"nav",
	"noframes",
	"noscript",
	// "object",
	"ol",
	"optgroup",
	"option",
	"output",
	"p",
	"param",
	"picture",
	"pre",
	"progress",
	"q",
	"rp",
	"rt",
	"ruby",
	"s",
	"samp",
	"script",
	"section",
	"select",
	"small",
	"source",
	"span",
	"strike",
	"strong",
	"style",
	"sub",
	"summary",
	"sup",
	"svg",
	"table",
	"tbody",
	"td",
	"template",
	"textarea",
	"tfoot",
	"th",
	"thead",
	"time",
	"title",
	"tr",
	"track",
	"tt",
	"u",
	"ul",
	"video",
	"wbr",
] as const;

type HTMLDefaultTag = typeof htmlTagNames[number];

export const [
	a,
	abbr,
	acronym,
	address,
	applet,
	area,
	article,
	aside,
	audio,
	b,
	base,
	basefont,
	bdi,
	bdo,
	big,
	blockquote,
	body,
	br,
	button,
	canvas,
	caption,
	center,
	cite,
	code,
	col,
	colgroup,
	data,
	datalist,
	dd,
	del,
	details,
	dfn,
	dialog,
	dir,
	div,
	dl,
	dt,
	em,
	embed,
	fieldset,
	figcaption,
	figure,
	font,
	footer,
	form,
	frame,
	frameset,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	head,
	header,
	hr,
	html,
	i,
	iframe,
	img,
	input,
	ins,
	kbd,
	label,
	legend,
	li,
	link,
	main,
	map,
	mark,
	meta,
	meter,
	nav,
	noframes,
	noscript,
	object,
	ol,
	optgroup,
	option,
	output,
	p,
	param,
	picture,
	pre,
	progress,
	q,
	rp,
	rt,
	ruby,
	s,
	samp,
	script,
	section,
	select,
	small,
	source,
	span,
	strike,
	strong,
	style,
	sub,
	summary,
	sup,
	svg,
	table,
	tbody,
	td,
	template,
	textarea,
	tfoot,
	th,
	thead,
	time,
	title,
	tr,
	track,
	tt,
	u,
	ul,
	video,
	wbr,
] = htmlTagNames.map(
	(tagName) => (
		attributes: IAttribute,
		...childNodes: (HTMLElement | Component<any, any>)[]
	) => generateElement(tagName, attributes, ...childNodes)
);

// export const D: { [K in HTMLDefaultTag]: any } = htmlTagNames.reduce(
// 	(acc, tagName) => (
// 		attributes: IAttribute,
// 		...childNodes: (HTMLElement | Component<any, any>)[]
// 	) => {
// 		acc[tagName] = generateElement(tagName, attributes, ...childNodes);
// 	},
// 	{}
// );

// export default htmlTagNames.reduce(
//   (acc, tagName) => (
//     attributes: IAttribute,
//     ...childNodes: HTMLElement[] | Component<any, any>[]
//   ) => {
//     acc[tagName] = generateElement(tagName, attributes, ...childNodes)
//     return acc
//   },
//   {}
// )

// const HtmlTagAndTypes: {} = {
//   aside: HTMLElement,
//   button: HTMLButtonElement,
//   div: HTMLDivElement,
//   footer: HTMLElement,
//   form: HTMLFormElement,
//   h1: HTMLHeadingElement,
//   h2: HTMLHeadingElement,
//   h3: HTMLHeadingElement,
//   h4: HTMLHeadingElement,
//   h5: HTMLHeadingElement,
//   h6: HTMLHeadingElement,
//   header: HTMLElement,
//   input: HTMLInputElement,
//   label: HTMLLabelElement,
//   nav: HTMLElement,
//   p: HTMLParagraphElement,
//   q: HTMLQuoteElement,
// }

// const TagNames = Object.keys(HtmlTagAndTypes)
// export const [
//   aside,
//   button,
//   div,
//   footer,
//   form,
//   h1,
//   h2,
//   h3,
//   h4,
//   h5,
//   h6,
//   header,
//   input,
//   label,
//   nav,
//   p,
//   q,
// ] = TagNames.map((htmlTagName) => {
//   const type = HtmlTagAndTypes[htmlTagName]
//   return (tagName: string, type: Type) => (
//     attributes: IAttribute,
//     ...childNodes: HTMLElement[] | Component<any, any>[]
//   ) => generateElement<type>(tagName, attributes, ...childNodes)
// })

// export const div = (
//   attributes: IAttribute,
//   ...childNodes: HTMLElement[] | Component<any, any>[]
// ) => generateElement('div', attributes, ...childNodes)

// export const a = (
//   attributes: IAttribute,
//   ...childNodes: HTMLElement[] | Component<any, any>[]
// ) => generateElement('a', attributes, ...childNodes)

// export const p = (
//   attributes: IAttribute,
//   ...childNodes: HTMLElement[] | Component<any, any>[]
// ) => generateElement('p', attributes, ...childNodes)

// export const span = (
//   attributes: IAttribute,
//   ...childNodes: HTMLElement[] | Component<any, any>[]
// ) => generateElement('span', attributes, ...childNodes)

// export const button = (
//   attributes: IAttribute,
//   ...childNodes: HTMLElement[] | Component<any, any>[]
// ) => generateElement('button', attributes, ...childNodes)

// export const input = (
//   attributes: IAttribute,
//   ...childNodes: HTMLElement[] | Component<any, any>[]
// ) => generateElement('input', attributes, ...childNodes)

// export const form = (
//   attributes: IAttribute,
//   ...childNodes: HTMLElement[] | Component<any, any>[]
// ) => generateElement('form', attributes, ...childNodes)

// export const label = (
//   attributes: IAttribute,
//   ...childNodes: HTMLElement[] | Component<any, any>[]
// ) => generateElement('label', attributes, ...childNodes)

// export const q = (
//   attributes: IAttribute,
//   ...childNodes: HTMLElement[] | Component<any, any>[]
// ) => generateElement('q', attributes, ...childNodes)

// export const [h1, h2, h3, h4, h5, h6] = [
//   'h1',
//   'h2',
//   'h3',
//   'h4',
//   'h5',
//   'h6',
// ].map(
//   (tagName) => (
//     attributes: IAttribute,
//     ...childNodes: HTMLElement[] | Component<any, any>[]
//   ) => generateElement(tagName, attributes, ...childNodes)
// )
// export const [aside, footer, header, nav, main] = [
//   'aside',
//   'footer',
//   'header',
//   'nav',
//   'main',
// ].map(
//   (tagName) => (
//     attributes: IAttribute,
//     ...childNodes: HTMLElement[] | Component<any, any>[]
//   ) => generateElement(tagName, attributes, ...childNodes)
// )
