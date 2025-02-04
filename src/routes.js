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
// const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
// const Progress = React.lazy(() => import('./views/base/progress/Progress'))
// const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
// const Tables = React.lazy(() => import('./views/base/tables/Tables'))
// const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

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
const Likehood = React.lazy(() => import('./views/charts/Likehood'))
const Relevance = React.lazy(() => import('./views/charts/Relevance'))
const Year = React.lazy(() => import('./views/charts/Year'))
const Country = React.lazy(() => import('./views/charts/Country'))
const Topics = React.lazy(() => import('./views/charts/Topics'))




// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '#', name: 'Carousel', element: Carousels },
  { path: '#', name: 'Collapse', element: Collapses },
  { path: '#', name: 'List Groups', element: ListGroups },
  { path: '#', name: 'Navs', element: Navs },
  { path: '#', name: 'Paginations', element: Paginations },
  { path: '#', name: 'Placeholders', element: Placeholders },
  { path: '#', name: 'Buttons', element: Buttons, exact: true },
  { path: '#', name: 'Buttons', element: Buttons },
  { path: '#', name: 'Dropdowns', element: Dropdowns },
  { path: '#', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/likehood', name: 'Charts', element: Likehood },
  { path: '/relevance', name: 'Charts', element: Relevance },
  { path: '/Year', name: 'Charts', element: Year },
  { path: '/Country', name: 'Charts', element: Country },
  { path: '/Topics', name: 'Charts', element: Topics },
  { path: '#', name: 'Forms', element: FormControl, exact: true },
  { path: '#', name: 'Form Control', element: FormControl },
  { path: '#', name: 'Select', element: Select },
  { path: '#', name: 'Checks & Radios', element: ChecksRadios },
  { path: '#', name: 'Range', element: Range },
  { path: '#', name: 'Input Group', element: InputGroup },
  { path: '#', name: 'Floating Labels', element: FloatingLabels },
  { path: '#', name: 'Layout', element: Layout },
  { path: '#', name: 'Validation', element: Validation },
  { path: '#', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '#', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '#', name: 'Flags', element: Flags },
  { path: '#', name: 'Brands', element: Brands },
  { path: '#', name: 'Notifications', element: Alerts, exact: true },
  { path: '#', name: 'Alerts', element: Alerts },
  { path: '#', name: 'Badges', element: Badges },
  { path: '#', name: 'Modals', element: Modals },
  { path: '#', name: 'Toasts', element: Toasts },
  { path: '#', name: 'Widgets', element: Widgets },
]

export default routes
