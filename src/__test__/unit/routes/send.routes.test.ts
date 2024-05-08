import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
// import sendRoutes from '../../../src/routes/send.routes'

describe('sendRoutes', () => {
  beforeEach(() => {})
  afterEach(() => {
    vi.clearAllMocks()
    vi.resetAllMocks()
  })

  it('should return Sucess con a simple request', async () => {
    expect(1).toBe(1)
  })
})
