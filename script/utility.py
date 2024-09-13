from rich.table import Table
from rich.console import Console

console = Console()

# Create a table
table = Table(title="Programming Languages")

# Add columns
table.add_column("Language", style="cyan", no_wrap=True)
table.add_column("Year", justify="right", style="magenta")

# Add rows
table.add_row("Python", "1991")
table.add_row("JavaScript", "1995")
table.add_row("Go", "2009")

# Display the table
console.print(table)
