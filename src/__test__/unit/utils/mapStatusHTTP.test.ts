import { describe, expect, it } from 'vitest'

import { mapStatusHTTP } from '../../../utils/mapStatusHTTP'

describe('mapStatusHTTP', () => {
  it('should return 200 when status is 200', () => {
    expect(mapStatusHTTP('SUCCESS')).toBe(200)
  })

  it('should return 401 when status is UNAUTHORIZED', () => {
    expect(mapStatusHTTP('UNAUTHORIZED')).toBe(401)
  })

  it('should return 400 when status is INVALID', () => {
    expect(mapStatusHTTP('INVALID')).toBe(400)
  })

  it('should return 403 when status is FORBIDDEN', () => {
    expect(mapStatusHTTP('FORBIDDEN')).toBe(403)
  })

  it('should return 404 when status is NOT_FOUND', () => {
    expect(mapStatusHTTP('NOT_FOUND')).toBe(404)
  })

  it('should return 400 when status is ERROR', () => {
    expect(mapStatusHTTP('ERROR')).toBe(400)
  })

  it('should return 201 when status is CREATED', () => {
    expect(mapStatusHTTP('CREATED')).toBe(201)
  })

  it('should return 204 when status is DELETED', () => {
    expect(mapStatusHTTP('DELETED')).toBe(204)
  })

  it('should return 200 when status is UPDATED', () => {
    expect(mapStatusHTTP('UPDATED')).toBe(200)
  })
})
