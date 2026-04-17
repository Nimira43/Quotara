type PostFilterProps = {
  searchQuery: string
  onSearchChange: (value: string) => void
}

const PostFilter = ({ searchQuery, onSearchChange }: PostFilterProps) => {
  return (  
    <div className='mb-6'>
      <input
        className='w-full px-4 py-2 rounded-md bg-teal-50 text-teal-700 border border-orange-400 focus:border-teal-700 outline-none transitioning'
        placeholder='Search Posts...'
        type='text'
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  )
}
 
export default PostFilter