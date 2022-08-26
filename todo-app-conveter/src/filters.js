// Set up filters default object

// getFilters
// Arguments: none
// Return value: filters object


// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none

// Make sure to set up the exports


const filters = {
    searchText: '',
    hideCompleted: false
}


const getFilters = () => filters



const setFilters = ({ searchText, hideCompleted }) => {
    if (typeof searchText === 'string') {
        // filters.searchText = updates.searchText
        filters.searchText = searchText
    }

    if (typeof hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted
    }
}


export { getFilters, setFilters }