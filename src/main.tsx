import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from '@/pages/home'
import Exam from '@/pages/exam'
import Learn from '@/pages/learn'
import Stars from '@/pages/user/stars'
import ExamMcq from '@/pages/exam/mcq'
import ExamFrq from '@/pages/exam/frq'
import Knowledge from '@/pages/learn/knowledge'
import History from '@/pages/user/history'
import Learning from '@/pages/user/learning'
import ExamUnfinish from '@/pages/exam/unfinish'
import FrqTable from '@/pages/practice/frq-table'
import McqConfig from '@/pages/practice/mcq-config'
import FrqQuestion from '@/pages/practice/frq-question'
import McqQuestion from '@/pages/practice/mcq-question'
import { ThemeProvider } from '@/components/dark-mode/theme-provider'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'stars',
    element: <Stars />
  },
  {
    path: 'learning',
    element: <Learning />
  },
  {
    path: 'history',
    element: <History />
  },
  {
    path: 'learn',
    element: <Learn />
  },
  {
    path: 'learn/knowledge/:id',
    element: <Knowledge />
  },
  {
    path: 'exam',
    element: <Exam />
  },
  {
    path: 'exam/unfinish',
    element: <ExamUnfinish />
  },
  {
    path: 'exam/:id/frq',
    element: <ExamFrq />
  },
  {
    path: 'exam/:id/mcq',
    element: <ExamMcq />
  },
  {
    path: 'practice/frq/table',
    element: <FrqTable />
  },
  {
    path: 'practice/frq/question/:id',
    element: <FrqQuestion />
  },
  {
    path: 'practice/mcq/config',
    element: <McqConfig />
  },
  {
    path: 'practice/mcq/questions',
    element: <McqQuestion />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </ThemeProvider>
  </React.StrictMode>,
)
