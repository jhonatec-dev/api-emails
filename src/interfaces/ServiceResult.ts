interface ServiceError {
  status: 'INVALID' | 'NOT_FOUND' | 'ERROR' | 'UNAUTHORIZED' | 'FORBIDDEN'
  data: { message: string }
}

interface ServiceSuccess<T> {
  status: 'SUCCESS' | 'CREATED' | 'DELETED' | 'UPDATED'
  data: T
}

type ServiceResult<T> = ServiceError | ServiceSuccess<T>

export default ServiceResult
