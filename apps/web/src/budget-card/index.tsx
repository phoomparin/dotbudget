import React from 'react'
import c from 'classnames'
import Ink from 'react-ink'

import {BudgetCardTitle} from './CardTitle'
import {BudgetDisplay} from './BudgetDisplay'
import {BudgetCardPercent} from './CardPercent'

import {BudgetCardProps} from './types'
import {toTextColor} from '../ui/colors'

export function BudgetCard(props: BudgetCardProps) {
  const containerClass = c(
    'relative mx-auto flex flex-col rounded-lg shadow-xl w-full bg-white',
    !props.isFlexible && 'opacity-75'
  )

  const isOverBudget = props.spent > props.allocated
  const textColor = toTextColor(isOverBudget)

  const spendingClass = c('text-xl sm:text-2xl pt-2 font-medium', textColor)
  const iconClass = c('far', 'fa-' + props.icon, textColor)

  return (
    <div className={containerClass}>
      <BudgetCardTitle {...props} />

      <div className="p-4 px-6">
        <div className="text-4xl">
          {props.icon && <i className={iconClass} />}
        </div>

        <div className={spendingClass}>
          <BudgetDisplay {...props} />
        </div>
      </div>

      <Ink opacity={0.05} />

      <BudgetCardPercent {...props} />
    </div>
  )
}
