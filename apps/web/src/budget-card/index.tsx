import React from 'react'
import c from 'classnames'

import {BudgetCardTitle} from './CardTitle'
import {BudgetCardPercent} from './CardPercent'

export function BudgetCard(props: BudgetCardProps) {
  const containerClass = c(
    'mx-auto flex flex-col rounded-lg shadow-xl w-full bg-white',
    !props.isFlexible && 'opacity-75'
  )

  return (
    <div className={containerClass}>
      <BudgetCardTitle {...props} />

      <div className="p-4 px-6">
        <div className="text-4xl">{props.emoji || '📦️'}</div>

        <div className="text-xl sm:text-2xl">
          {props.isFlexible && (
            <span>
              {props.spent || 0} <small>of</small>{' '}
            </span>
          )}

          {props.allocated || 0}
        </div>
      </div>

      <BudgetCardPercent {...props} />
    </div>
  )
}
