import {Plan, PlanAllocations} from '@dotbudget/plan'

import {sum} from '../utils'

export function getPlanAllocations(
  plans: Plan[],
  totalBudget: number
): PlanAllocations {
  const allocations: PlanAllocations = {}
  let remaining = totalBudget

  for (const plan of plans) {
    const amount = plan.fixed
      ? plan.fixed / 12
      : (plan.percent / 100) * totalBudget

    allocations[plan.category] = amount
  }

  const monthlyAllocations = sum(Object.values(allocations)) //?
  remaining -= monthlyAllocations

  allocations.investment = remaining

  return allocations
}
