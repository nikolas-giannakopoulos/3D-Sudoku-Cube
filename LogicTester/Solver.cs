namespace LogicTester
{
    public class Solver
    {
        public Solver(){}

        public void Solve(Cube cube)
        {
            Cell currentCell = cube.cellList[0, 0, 0];

        }

        public bool run(Cube cube, Cell cell)
        {
            for(int number = 1; number < 10; number++)
            {
                cell.setNumber(number);
                if(Checker(cell, cube))
                {
                    CellPosition position = cell.getPosition();
                    var column = (position.column + 1) % 3;
                    int row = position.row;
                    int face = (int)position.face;
                    if(column==0)
                    {
                        row = (row +1) % 3; 
                        if(row == 0)
                        {
                            face = (int)position.face + 1;
                            if(face == 6)
                            {
                                return true;
                            }
                        }
                    }
                    Cell nextCell = cube.GetCell(new CellPosition((CubeFaces)face, row, column));
                    if (run(cube, nextCell) == true)
                    {
                        return true;
                    }
                }          
            }
            cell.setNumber(0);
            return false;
        }

        public bool Checker(Cell cell, Cube cube)
        {
            if(CheckFace(cube, cell)){
                if(cell.getPosition().row == 1 && cell.getPosition().column == 1)   
                {
                    return true;
                }
                else
                {
                    bool flag = false;
                    int[,] edges = new int[4,2]{ {0,0},{1,0}, {1,2}, {2,1}};
                    for (int i = 0; i < edges.GetLength(0); i++) {
                        if (cell.getPosition().row == edges[i,0] && cell.getPosition().column == edges[i,1])
                        {
                            flag = true;
                            break;
                        }
                    }
                    if (flag)
                    {
                        return CheckEdges(cube);
                    }
                    else
                    {
                        return CheckCorners(cube);
                    }
                }
            }
            else
            {
                return false;
            }
        }

        
        public bool CheckEdges(Cube cube)
        {
            foreach (var edgePair in CubeTopology.Edges)
            {
                var cellA = cube.GetCell(edgePair[0]);
                var cellB = cube.GetCell(edgePair[1]);

                if (cellA.getNumber() != 0 && cellB.getNumber() != 0)
                {
                    return cellA.getNumber() + cellB.getNumber() == 12;
                }
                else
                {
                    return true;
                }
            }
            return false;
        }

        public bool CheckFace(Cube cube, Cell cell)
        {
            var currentFace = cell.getPosition().face;
            var currentNumber = cell.getNumber();
            for(int i = 0; i < 3; i++)
            {
                for(int j = 0; j < 3; j++)
                {
                    var compareCell = cube.GetCell(new CellPosition(currentFace, i, j));
                    if(compareCell.getNumber() == currentNumber && cell.getPosition()!= compareCell.getPosition())
                    {
                        return false;
                    }
                }
            }
            return true;
        }

        public bool CheckCorners(Cube cube)
        {
            foreach (var cornerTriples in CubeTopology.Corners)
            {
                var cellA = cube.GetCell(cornerTriples[0]);
                var cellB = cube.GetCell(cornerTriples[1]);
                var cellC = cube.GetCell(cornerTriples[2]);


                if (cellA.getNumber() != 0 && cellB.getNumber() != 0 && cellC.getNumber() != 0)
                {
                    return cellA.getNumber() + cellB.getNumber() + cellC.getNumber() == 12;
                }
                else
                {
                    return true;
                }
            }
            return false;
        }
    }
}