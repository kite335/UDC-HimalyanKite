"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command"

const  SearchBar=()=> {
  const [open, setOpen] = React.useState(false)

  // Sample search data - replace with your actual data
  const searchItems = [
    { id: 1, category: "Tours", title: "Himalayan Adventure Tour", href: "/tours/himalayan-adventure" },
    { id: 2, category: "Tours", title: "Kashmir Great Lakes Trek", href: "/tours/kashmir-lakes" },
    { id: 3, category: "Destinations", title: "Ladakh", href: "/destinations/ladakh" },
    { id: 4, category: "Destinations", title: "Himachal Pradesh", href: "/destinations/himachal" },
    { id: 5, category: "Expeditions", title: "Kilimanjaro Climb", href: "/expeditions/kilimanjaro" },
    { id: 6, category: "Expeditions", title: "Everest Base Camp", href: "/expeditions/everest" },
  ]

  // Filter logic for search results
  const [searchQuery, setSearchQuery] = React.useState("")
  
  const groupedResults = React.useMemo(() => {
    if (!searchQuery.trim()) return []
    
    const filtered = searchItems.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Group by category
    const grouped = filtered.reduce((acc, item) => {
      const existing = acc.find((g) => g.category === item.category)
      if (existing) {
        existing.items.push(item)
      } else {
        acc.push({ category: item.category, items: [item] })
      }
      return acc
    }, [])

    return grouped
  }, [searchQuery])

  // Keyboard shortcut: Cmd+K or Ctrl+K to open
  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSelect = (href) => {
    setOpen(false)
    // Navigate to the href (you can use router.push if using Next.js or React Router)
    window.location.href = href
  }

  return (
    <>
      {/* Search Button in Header */}
      <button
        onClick={() => setOpen(true)}
        className="group relative inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors w-full"
      >
        <SearchIcon className="size-6" />
        <span className="hidden sm:inline-block">Search...</span>
        <kbd className="ml-auto hidden rounded border bg-muted px-1.5 py-0.5 font-mono text-xs font-semibold text-muted-foreground sm:inline-block">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {/* Command Dialog (Modal Search) */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search tours, destinations, expeditions..."
          value={searchQuery}
          onValueChange={setSearchQuery}
          
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {groupedResults.length > 0 ? (
            groupedResults.map((group) => (
              <CommandGroup key={group.category} heading={group.category}>
                {group.items.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={item.title}
                    onSelect={() => handleSelect(item.href)}
                  >
                    <span>{item.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))
          ) : null}
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default SearchBar