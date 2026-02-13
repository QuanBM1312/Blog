export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string
          title: string
          slug: string
          content: string | null
          excerpt: string | null
          featured_image_id: string | null
          author_id: string | null
          status: string | null
          published_at: string | null
          created_at: string
          updated_at: string
          image_url: string | null
          published: boolean | null
          category_id: string | null
          custom_fields: Json | null
          layout_config: Json | null
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content?: string | null
          excerpt?: string | null
          featured_image_id?: string | null
          author_id?: string | null
          status?: string | null
          published_at?: string | null
          created_at?: string
          updated_at?: string
          image_url?: string | null
          published?: boolean | null
          category_id?: string | null
          custom_fields?: Json | null
          layout_config?: Json | null
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string | null
          excerpt?: string | null
          featured_image_id?: string | null
          author_id?: string | null
          status?: string | null
          published_at?: string | null
          created_at?: string
          updated_at?: string
          image_url?: string | null
          published?: boolean | null
          category_id?: string | null
          custom_fields?: Json | null
          layout_config?: Json | null
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          parent_id: string | null
          created_at: string
          template_type: string | null
        }
        Insert: {
          id?: string
          name: string
          slug: string
          parent_id?: string | null
          created_at?: string
          template_type?: string | null
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          parent_id?: string | null
          created_at?: string
          template_type?: string | null
        }
      }
      tags: {
        Row: {
          id: string
          name: string
          slug: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
        }
      }
      post_categories: {
        Row: {
          post_id: string
          category_id: string
        }
        Insert: {
          post_id: string
          category_id: string
        }
        Update: {
          post_id?: string
          category_id?: string
        }
      }
      post_tags: {
        Row: {
          post_id: string
          tag_id: string
        }
        Insert: {
          post_id: string
          tag_id: string
        }
        Update: {
          post_id?: string
          tag_id?: string
        }
      }
      media: {
        Row: {
          id: string
          filename: string
          url: string
          mimetype: string | null
          size: number | null
          uploaded_by: string | null
          created_at: string
        }
        Insert: {
          id?: string
          filename: string
          url: string
          mimetype?: string | null
          size?: number | null
          uploaded_by?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          filename?: string
          url?: string
          mimetype?: string | null
          size?: number | null
          uploaded_by?: string | null
          created_at?: string
        }
      }
      comments: {
        Row: {
          id: string
          post_id: string
          parent_id: string | null
          author_name: string | null
          author_email: string | null
          content: string
          status: string | null
          created_at: string
        }
        Insert: {
          id?: string
          post_id: string
          parent_id?: string | null
          author_name?: string | null
          author_email?: string | null
          content: string
          status?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          post_id?: string
          parent_id?: string | null
          author_name?: string | null
          author_email?: string | null
          content?: string
          status?: string | null
          created_at?: string
        }
      }
      users: {
        Row: {
           id: string
           email: string
           password_hash: string
           name: string | null
           role: string | null
           created_at: string
           updated_at: string
        }
        Insert: {
           id?: string
           email: string
           password_hash: string
           name?: string | null
           role?: string | null
           created_at?: string
           updated_at?: string
        }
        Update: {
           id?: string
           email?: string
           password_hash?: string
           name?: string | null
           role?: string | null
           created_at?: string
           updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

export type Post = Database['public']['Tables']['posts']['Row']
export type Category = Database['public']['Tables']['categories']['Row']
export type Tag = Database['public']['Tables']['tags']['Row']
export type Media = Database['public']['Tables']['media']['Row']
export type Comment = Database['public']['Tables']['comments']['Row']
