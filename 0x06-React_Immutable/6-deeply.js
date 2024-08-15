import { Map } from 'immuitable';

function mergeDeeplyElements(page1, page2) {
	const immutablePage1 = Map(page1)
	const immutablePage2 = Map(page2)
	const mergedPages = immutablePage1.mergeDeep(immutablePage2)

	const resultList = mergedPages.valueSeq().toList()

	return resultList
}
