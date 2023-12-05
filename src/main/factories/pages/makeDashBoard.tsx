import React, { lazy } from 'react'
import { makeRemoteGetAllFarmer } from '../useCases/make-remote-getAllFarmer'
import { makeRemoteCreateFarmer } from '../useCases/make-remote-createFarmer'

const Dashboard = lazy(async () => import('@/presentation/pages/Dashboard'))

export const makeDashboard = (): React.ReactElement => {
  return (
    <Dashboard
      getAll={makeRemoteGetAllFarmer()}
      createFarmer={makeRemoteCreateFarmer()}
    />
  )
}
