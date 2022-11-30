import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

//pages
// const overallCalendar = React.lazy(() => import('./views/pages/BO/calendar'))
// const overallEInfo = React.lazy(() => import('./views/pages/BO/employee'))
const Truck = React.lazy(() => import('./views/pages/BO/truck'))
const Info = React.lazy(() => import('./views/pages/BO/info'))
const MCP = React.lazy(() => import('./views/pages/BO/mcp'))

//employee
const e1 = React.lazy(() => import('./views/pages/employee/employee/employee1'))
const e2 = React.lazy(() => import('./views/pages/employee/employee/employee2'))
const e3 = React.lazy(() => import('./views/pages/employee/employee/employee3'))
const e4 = React.lazy(() => import('./views/pages/employee/employee/employee4'))
const e5 = React.lazy(() => import('./views/pages/employee/employee/employee5'))
const e6 = React.lazy(() => import('./views/pages/employee/employee/employee6'))
const e7 = React.lazy(() => import('./views/pages/employee/employee/employee7'))
const e8 = React.lazy(() => import('./views/pages/employee/employee/employee8'))
const e9 = React.lazy(() => import('./views/pages/employee/employee/employee9'))
const e10 = React.lazy(() => import('./views/pages/employee/employee/employee10'))
const e11 = React.lazy(() => import('./views/pages/employee/employee/employee11'))
const e12 = React.lazy(() => import('./views/pages/employee/employee/employee12'))
const e13 = React.lazy(() => import('./views/pages/employee/employee/employee13'))
const e14 = React.lazy(() => import('./views/pages/employee/employee/employee14'))
const e15 = React.lazy(() => import('./views/pages/employee/employee/employee15'))
const e16 = React.lazy(() => import('./views/pages/employee/employee/employee16'))
const e17 = React.lazy(() => import('./views/pages/employee/employee/employee17'))
const e18 = React.lazy(() => import('./views/pages/employee/employee/employee18'))
const e19 = React.lazy(() => import('./views/pages/employee/employee/employee19'))


// const employeeCalendar = React.lazy(() => import('./views/pages/employee/calendar/calendar'))
// const employeeRoute = React.lazy(() => import('./views/pages/employee/route/route'))
// const employeeInfo = React.lazy(() => import('./views/pages/employee/employee/employee'))
// const truckInfo = React.lazy(() => import('./views/pages/employee/mcp/mcp'))
// const mcpInfo = React.lazy(() => import('./views/pages/employee/truck/truck'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/infoList', name: 'InfoList', element: Info},
  { path: '/truckInfo', name: 'TruckInfo', element: Truck},
  { path: '/mcpInfo', name: 'MCPInfo', element: MCP},
  { path: '/workcalendar', name: 'Work Calendar', element: Dashboard },
  { path: '/employee1', name: 'Employee Info', element: e1 },
  { path: '/employee2', name: 'Employee Info', element: e2 },
  { path: '/employee3', name: 'Employee Info', element: e3 },
  { path: '/employee4', name: 'Employee Info', element: e4 },
  { path: '/employee5', name: 'Employee Info', element: e5 },
  { path: '/employee6', name: 'Employee Info', element: e6 },
  { path: '/employee7', name: 'Employee Info', element: e7 },
  { path: '/employee8', name: 'Employee Info', element: e8 },
  { path: '/employee9', name: 'Employee Info', element: e9 },
  { path: '/employee10', name: 'Employee Info', element: e10 },
  { path: '/employee11', name: 'Employee Info', element: e11 },
  { path: '/employee12', name: 'Employee Info', element: e12 },
  { path: '/employee13', name: 'Employee Info', element: e13 },
  { path: '/employee14', name: 'Employee Info', element: e14 },
  { path: '/employee15', name: 'Employee Info', element: e15 },
  { path: '/employee16', name: 'Employee Info', element: e16 },
  { path: '/employee17', name: 'Employee Info', element: e17 },
  { path: '/employee18', name: 'Employee Info', element: e18 },
  { path: '/employee19', name: 'Employee Info', element: e19 },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
