export interface UserResponseDTO {
  user: {
    id?: string
    email?: string
    name?: string
    created_at?: Date
    updated_at?: Date
  }
  token?: string
}
