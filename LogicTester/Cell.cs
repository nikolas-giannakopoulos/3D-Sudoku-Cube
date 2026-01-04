namespace LogicTester
{
    public class Cell
    {
        private int cellNumber;

        private bool locked;

        private CellPosition cellPosition;
        public Cell(int cellNumber, bool locked, CellPosition cellPosition)
        {
            this.cellNumber = cellNumber;
            this.locked = locked;
            this.cellPosition = cellPosition;
        }

    public bool isLocked()
        {
            return locked;
        }

    public void setNumber(int cellNumber)
        {
            this.cellNumber = cellNumber;
        }

    public int getNumber()
        {
            return this.cellNumber;
        }

    public CellPosition getPosition()
        {
            return this.cellPosition;
        }
    }
}