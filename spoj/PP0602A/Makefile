CC=g++

CFLAGS=-Wall -std=c++17
CHECKERS=-fsanitize=address -fsanitize=undefined -D_GLIBCXX_DEBUG

EXE=main.out

run: main.cpp
	$(CC) -o $(EXE) $(CFLAGS) $(CHECKERS) $^ && ./$(EXE)
	
stable: main.cpp
	$(CC) -o $(EXE) $(CFLAGS) $(CHECKERS) $^

fast: main.cpp
	$(CC) -o $(EXE) $(CFLAGS) -O2 -Wno-unused-result $^

clean:
	rm $(EXE)
